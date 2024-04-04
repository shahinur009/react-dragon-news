import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-error">Breaking News</button>
            <Marquee className="mr-14" pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text. joy ma tara ...ramadan mubarak. Allahu Akbar
            </Marquee>
            <Marquee className="mr-14" pauseOnHover={true} speed={150}>
                I can be a React component, multiple React components, or just some text. joy ma tara ...ramadan mubarak. Allahu Akbar
            </Marquee>
            <Marquee className="mr-14" pauseOnHover={true} speed={150}>
                I can be a React component, multiple React components, or just some text. joy ma tara ...ramadan mubarak. Allahu Akbar
            </Marquee>
        </div>
    );
};

export default BreakingNews;