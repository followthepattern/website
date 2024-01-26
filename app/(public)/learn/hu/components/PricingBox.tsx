import CheckIcon from "@/icons/CheckIcon";
import CircleXMarkIcon from "@/icons/CircleXMark";
import classNames from "classnames";

interface TitleProperties {
    className?: string;
    children?: any;
}

interface ContentProperties extends TitleProperties {}

interface SubTitleProperties extends TitleProperties {}

const Content = (props: ContentProperties) => {
    return (
        <div className={classNames("", props.className)}>
            {props.children}
        </div>
    );
};

interface FeatureProperties {
    className?: string;
    children?: any;
}

const Feature = (props: FeatureProperties) => {
    return (
        <div className={classNames("flex flex-row items-start pb-3", props.className)}>
            <div><CheckIcon className="w-5 text-blue-500 pt-[2px]" /></div><p className="pl-1">{props.children}</p>
        </div>
    );
}

interface MissingFeatureProperties extends TitleProperties {}

const MissingFeature = (props: MissingFeatureProperties) => {
    return (
        <div className={classNames("flex flex-row items-start pb-3", props.className)}>
            <CircleXMarkIcon className="w-5 text-gray-400 pt-[2px]" /> <p className="pl-1">{props.children}</p>
        </div>
    );
}

const SubTitle = (props: SubTitleProperties) => {
    return (
        <div className={classNames("text-white text-center text-sm mx-2", props.className)}>
            {props.children}
        </div>
    );
};

const Title = (props: TitleProperties) => {
    return (
        <div className={classNames("text-white text-center text-4xl font-medium mb-2", props.className)}>
            {props.children}
        </div>
    );
}

interface PricingBoxProperties {
    className?: string;
    headerClassname?: string;
    children?: any;
    title?: string;
    subtitle?: string;
    id?: string;
}

const PricingBox = (props: PricingBoxProperties) => {
    return (
        <div id={props.id} className={classNames("rounded-lg border", props.className)}>
            {props.children}
        </div>
    );
};

PricingBox.Title = Title;
PricingBox.Subtitle = SubTitle;
PricingBox.Content = Content;
PricingBox.Feature = Feature;
PricingBox.MissingFeature = MissingFeature;
export default PricingBox;
