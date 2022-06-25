const ImgSrc = ({ image, result }) => {
    return <img src={(image || result)?.urls?.regular} alt="" />;
}
 
export default ImgSrc;