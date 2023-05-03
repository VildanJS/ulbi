import { FC, useCallback, useState } from 'react'
import cls from './RatingCard.module.scss'
import classNames from 'classnames'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button, ButtonThemes } from '@/shared/ui/Button'
import { detectDevice } from '@/shared/utils/detectDevice'
import { IRating } from '@/entities/Rating'


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
      <VStack align={'center'} gap={'8'}>
        <Text title={title} />
        <StarRating currentStar={currentStar} onSelectStar={onSelectStars} />
      </VStack>
      <Modal isOpen={isModalOpen}>
        <VStack gap={'32'}>
          <Text title={feedbackTitle} />
          <Input value={feedback} onChange={setFeedback} placeholder={'Введите ваш отзыв'} />
        </VStack>
        <HStack className={cls.modalWrap} max gap={'16'} justify={'end'}>
          <Button onClick={cancelHandle} theme={ButtonThemes.OUTLINE}>Отменить</Button>
          <Button onClick={sendHandle} theme={ButtonThemes.OUTLINE}>Отправить</Button>
        </HStack>
      </Modal>
    </Card>
  )
}
