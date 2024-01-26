interface ItemProperties {
    id: number,
    title: string;
    subtitle: string;
    children?: any;
}

const Item = (props: ItemProperties) => {
    return (
        <li className="mb-10 ml-6">
            <span className="flex absolute font-medium -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white ">
                {props.id}
            </span>
            <h3 className="flex items-center mb-1 text-lg font-medium text-blue-900">
                {props.title}
            </h3>
            <p className="block mb-5 text-sm font-light leading-none text-gray-500">
                {props.subtitle}
            </p>
            <div className="pb-2 text-base font-light">
                {props.children}
            </div>
        </li>
    )
}

interface TimelineProperties {
    children?: any;
}

const Timeline = (props: TimelineProperties) => {
    return (
        <ol className="relative border-l border-gray-200 md:ml-16">
            {props.children}
        </ol>
    );
};

Timeline.Item = Item;
export default Timeline;
