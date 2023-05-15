import { FC, useCallback, useState } from 'react'

import classNames from 'classnames'

import { AppButton } from '@/shared/ui/AppButton'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { Modal } from '@/shared/ui/Modal'
import { HStack, VStack } from '@/shared/ui/Stack'
import { StarRating } from '@/shared/ui/StarRating'
import { Text } from '@/shared/ui/Text'

import cls from './RatingCard.module.scss'


interface RatingProps {
  className?: string,
  title: string,
  feedbackTitle: string,
  onCancel?: (stars: number) => void,
  onFeedback?: (stars: number, feedback: string) => void,
  initialStarsCount?: number,
  initialFeedback?: string

}

export const RatingCard: FC<RatingProps> = (props) => {
  const {
    className,
    title,
    feedbackTitle,
    onCancel,
    onFeedback,
    initialStarsCount = 0,
    initialFeedback = ''
  } = props

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [currentStar, setCurrentStar] = useState(initialStarsCount)
  const [feedback, setFeedback] = useState(initialFeedback)

  const onSelectStars = useCallback((star: number) => {
    setIsModalOpen(true)
    setCurrentStar(star)
  }, [])

  const sendHandle = useCallback(() => {
    setIsModalOpen(false)
    onFeedback?.(currentStar, feedback)
  }, [currentStar, feedback, onFeedback])

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(currentStar)
  }, [currentStar, onCancel])


  const ratingClass = classNames(className, cls.rating)

  return (
    <Card className={ratingClass}>
      <VStack align={'Center'} gap={'8'}>
        <Text title={title} />
        <StarRating currentStar={currentStar} onSelectStar={onSelectStars} />
      </VStack>
      <Modal isOpen={isModalOpen}>
        <VStack gap={'32'}>
          <Text title={feedbackTitle} />
          <Input value={feedback} onChange={setFeedback} placeholder={'Введите ваш отзыв'} />
        </VStack>
        <HStack className={cls.modalWrap} max gap={'16'} justify={'End'}>
          <AppButton onPress={cancelHandle} theme='outline'>Отменить</AppButton>
          <AppButton onPress={sendHandle} theme='outline'>Отправить</AppButton>
        </HStack>
      </Modal>
    </Card>
  )
}
