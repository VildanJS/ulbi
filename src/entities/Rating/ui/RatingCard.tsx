import { ChangeEventHandler, FC, useCallback, useState } from 'react'

import classNames from 'classnames'
import { AppTextField } from '@/shared/ui/redesigned/AppInput'

import { Modal } from '@/shared/ui/deprecated/Modal'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

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

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setFeedback(e.target.value)

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
    <Card borderRadius={'round'} data-testid='RatingCard' className={ratingClass}>
      <VStack align={'Center'} gap={'8'}>
        <Text size={'M'} title={title} />
        <StarRating currentStar={currentStar} onSelectStar={onSelectStars} />
      </VStack>
      <Modal isOpen={isModalOpen}>
        <VStack gap={'32'}>
          <Text title={feedbackTitle} />
          <AppTextField data-testid='RatingCard.Input' value={feedback} onChange={onChange} placeholder={'Введите ваш отзыв'} />
        </VStack>
        <HStack className={cls.modalWrap} max gap={'16'} justify={'End'}>
          <AppButton data-testid='RatingCard.Cancel' onPress={cancelHandle} variant='outline'>Отменить</AppButton>
          <AppButton data-testid='RatingCard.Send' onPress={sendHandle} variant='outline'>Отправить</AppButton>
        </HStack>
      </Modal>
    </Card>
  )
}
