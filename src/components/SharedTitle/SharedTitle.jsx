

const SharedTitle = ({heading, subheading}) => {
    return (
        <div className="w-2/5 my-12 mx-auto text-center">
            <p className="text-orange-600 mb-2 text-xl italic">---{subheading}---</p>
            <h2 className="text-4xl p-2 border-y-2 uppercase">{heading}</h2>
        </div>
    );
};

export default SharedTitle;