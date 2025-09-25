export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const secondsInAMinute = 60;
  const secondsInAnHour = secondsInAMinute * 60;
  const secondsInADay = secondsInAnHour * 24;
  const secondsInAWeek = secondsInADay * 7;
  const secondsInAMonth = secondsInADay * 30; // Approximation
  const secondsInAYear = secondsInADay * 365; // Approximation

  if (diffInSeconds < secondsInAMinute) {
    return `${diffInSeconds} секунд назад`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / secondsInAMinute);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} минут назад`;
  }

  const diffInHours = Math.floor(diffInSeconds / secondsInAnHour);
  if (diffInHours < 24) {
    return `${diffInHours} часов назад`;
  }

  const diffInDays = Math.floor(diffInSeconds / secondsInADay);
  if (diffInDays < 7) {
    if (diffInDays === 1) return '1 день назад';
    return `${diffInDays} дней назад`;
  }

  const diffInWeeks = Math.floor(diffInSeconds / secondsInAWeek);
  if (diffInWeeks < 4) {
    if (diffInWeeks === 1) return '1 неделю назад';
    return `${diffInWeeks} недель назад`;
  }

  const diffInMonths = Math.floor(diffInSeconds / secondsInAMonth);
  if (diffInMonths < 12) {
    if (diffInMonths === 1) return '1 месяц назад';
    return `${diffInMonths} месяцев назад`;
  }

  const diffInYears = Math.floor(diffInSeconds / secondsInAYear);
  if (diffInYears === 1) return '1 год назад';
  return `${diffInYears} лет назад`;
};
