import path from 'path'

import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const layer = process.argv[2] || 'shared'
const slice = 'ui'
const indexFilename = 'index.ts'
const dest = project.getDirectory(
  path.resolve(__dirname, '..', 'src', layer, slice),
)
const directories = dest?.getDirectories()

directories?.forEach((directory) => {
  const folderName = directory.getPath()
  const isIndexFileExist = directory.getSourceFile(
    `${folderName}/${indexFilename}`,
  )
  if (isIndexFileExist) {
    const filesInFolder = directory.getSourceFiles([
      '**/*.tsx',
      '!**/*.stories.tsx',
      '!**/*.test.tsx',
    ])

    let content = ''

    filesInFolder?.forEach((component) => {
      const folderLen = folderName.length
      const moduleName = component.getBaseNameWithoutExtension()
      const filePath = component.getFilePath()
      console.log('-> filePath', filePath)

      const modulePath = `.${filePath.slice(folderLen, -4)}` // минус расширение файла
      const currentImport = `export {${moduleName}} from "${modulePath}"\n`
      content += currentImport
      // console.log(content)
      const file = directory.createSourceFile(
        `${folderName}/${indexFilename}`,
        content,
        { overwrite: true },
      )
      // eslint-disable-next-line no-console
      file.save().then(() => console.log(`${folderName} --> index.ts created!`))
    })
  }
})

project.save().then(() => console.log('Done!'))
