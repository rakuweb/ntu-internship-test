import { Image } from 'components/images/Image';
const FileInvoiceSvg = () => {
  return (
    <Image
      ml={{ base: `${10 / 3.75}vw`, md: `${23 / 19.2}vw` }}
      mr={{ base: `${5 / 3.75}vw`, md: `${13 / 19.2}vw` }}
      mb={{
        base: `${0 / 3.75}vw`,
        md: `${2 / 7.68}vw`,
        lg: `${19 / 19.2}vw`,
      }}
      w={{
        base: `${14 / 3.75}vw`,
        md: `${15 / 7.68}vw`,
        lg: `${32 / 19.2}vw`,
      }}
      h={{
        base: `${21 / 3.75}vw`,
        md: `${22 / 7.68}vw`,
        lg: `${32 / 19.2}vw`,
      }}
      image={{
        width: 32,
        height: 42,
        src: `/svg/file-invoice-solid.svg`,
        alt: `書類のアイコン`,
      }}
    />
  );
};

export default FileInvoiceSvg;
