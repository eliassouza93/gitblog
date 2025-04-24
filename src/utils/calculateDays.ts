export const calculateDays = (createdAt: string): string => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const timeDiff = now.getTime() - createdDate.getTime();
    const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  
    if (dayDiff === 0) return 'Hoje';
    if (dayDiff === 1) return '1 dia';
    return `${dayDiff} dias`;
  };