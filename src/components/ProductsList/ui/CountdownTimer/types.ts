export interface CountdownTimerProps {
  deadline: Date;
  size?: 'small' | 'medium' | 'large';
  onExpired?: () => void;
}
