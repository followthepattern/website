import PhotoIcon from "@/icons/PhotoIcon";

export default function UploadInput() {
    return (
        <div className="mt-1 sm:mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-900 hover:text-blue-500"
                    >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="input" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
        </div>
    )
}