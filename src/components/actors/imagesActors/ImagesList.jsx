import { urlImage } from "../../../config/config";
import PropTypes from 'prop-types';
import noimage from "../../../assets/noimage.jpg";

function ImagesList({ actorImagesList }) {

    return (
        <div className="flex flex-wrap m-2 w-full justify-center items-start">
            {actorImagesList.map(
                (image, index) => {
                    const imagePath = image.file_path ? `${urlImage}${image.file_path}` : noimage;

                    return (
                        <div key={index} className="flex flex-col p-5 w-1/2 md:w-1/3 lg:w-1/5">
                            <img src={imagePath} className="rounded-lg mb-2 shadow-slate-600 shadow-lg aspect-[2/3] object-cover object-center hover:border-white hover:border-4 h-full w-full" />
                        </div>
                    );
                })
            }
        </div>
    );
}

ImagesList.propTypes = { actorImagesList: PropTypes.array };
export default ImagesList;
