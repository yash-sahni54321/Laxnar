const LimitedTextarea = ({ rows, cols, value, limit, onChange, name, placeHolder = "Let others know what to expect..." }) => {
    const setFormattedContent = (value) => {
        let text = value.slice(0, limit);
        onChange(text);
    };

    return (
        <div className='relative'>
            <textarea
                rows={rows}
                cols={cols}
                onChange={onChange}
                value={value}
                className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                placeholder={placeHolder}
                name={name}
            />
            <div className='absolute bottom-6 right-4'>
                <p className='text-lightGray text-sm'>
                    {value.length}/{limit}
                </p>
            </div>
        </div>
    );
};

export default LimitedTextarea;
