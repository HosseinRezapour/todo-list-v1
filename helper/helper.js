export const autoKey = () => parseInt(Date.now() * Math.random()).toString();

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}