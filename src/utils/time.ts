import dayjs from 'dayjs';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

/**
 * 生成当前时间戳
 * @returns 当前时间戳
 */
export const getTimeStamp = () => dayjs().valueOf();

/**
 * 格式化时间
 * @param date 需要转换的时间
 * @param format 格式化方式
 * @returns 格式化后的时间
 */
export const parseTime = (date: any | undefined = undefined, format = DATE_TIME_FORMAT): string => {
  return dayjs(date).format(format);
};
