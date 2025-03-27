import { Typography } from '@mui/material';
import { CountdownTimerProps } from './types';
import { StyledCountdownContainer, StyledTimeUnit } from './styles';

const formatTime = (time: number): string => time.toString().padStart(2, '0');

/**
 * Компонент обратного отсчета до специального предложения
 * 
 * @param deadline - дата окончания акции
 * @param size - размер компонента (small, medium, large)
 * @param onExpired - callback при истечении времени
 * 
 * @example
 * // Пример использования
 * <CountdownTimer deadline={new Date('2025-03-31')} size="medium" onExpired={() => {}} />
 */
const CountdownTimer = ({ deadline, size = 'medium', onExpired }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = deadline.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (onExpired) {
          onExpired();
        }
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [deadline, onExpired]);

  return (
    <StyledCountdownContainer>
      {timeLeft.days > 0 && (
        <StyledTimeUnit size={size}>
          <span>{formatTime(timeLeft.days)}</span>
          <small>Days</small>
        </StyledTimeUnit>
      )}
      <StyledTimeUnit size={size}>
        <span>{formatTime(timeLeft.hours)}</span>
        <small>Hours</small>
      </StyledTimeUnit>
      <StyledTimeUnit size={size}>
        <span>{formatTime(timeLeft.minutes)}</span>
        <small>Minutes</small>
      </StyledTimeUnit>
      <StyledTimeUnit size={size}>
        <span>{formatTime(timeLeft.seconds)}</span>
        <small>Seconds</small>
      </StyledTimeUnit>
    </StyledCountdownContainer>
  );
};

export default CountdownTimer;
