export const toBuddhistYear = (date: Date): number => {
  return date.getFullYear() + 543;
};

export const formatThaiDate = (date: Date, includeTime: boolean = false): string => {
  const day = date.getDate();
  const monthNamesTh = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];
  const month = monthNamesTh[date.getMonth()];
  const year = toBuddhistYear(date);

  let formatted = `${day} ${month} ${year}`;
  
  if (includeTime) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    formatted += ` ${hours}:${minutes} น.`;
  }
  
  return formatted;
};

export const formatThaiDateShort = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = toBuddhistYear(date);
  
  return `${day}/${month}/${year}`;
};
