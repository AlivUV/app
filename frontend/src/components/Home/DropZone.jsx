import { Title } from 'components/Home/Title'
import { gemini } from 'services/AssistantService'

function DropZone(props) {
    const [fileState, setFileState] = props.fileState;

    const handleChange = ({ target }) => {
        let file = target.files[0];

        if (!file) {
            // Code in case that the file was not been uploaded.
            return
        }

        if (/image\/*|application\/pdf/.test(file.type)) {
            let reader = new FileReader()
            reader.onload = e => {
                gemini(e.target.result.split(',')[1])
                    .then(data => { setFileState({ ...file, ...data }); })
            };
            reader.onerror = (err) => console.log(err);
            reader.readAsDataURL(file);
            file.url = URL.createObjectURL(file);
            setFileState(file);
        }
    };


    return (
        <label style={{ position: 'relative', textAlign: 'center', borderStyle: 'dashed', borderRadius: '2em', margin: 'auto', padding: '1em' }}>
            <Title>{props.title}</Title>
            {
                (!fileState)
                    ? <svg xmlns="http://www.w3.org/2000/svg" class="h-40 w-40" fill="none" viewBox="0 0 24 18" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    : <>
                        <img src={fileState.url} alt={fileState.name} style={{ maxWidth: '100%', maxHeight: '300px ' }} />
                        <br />
                        <label style={{ color: 'gray' }}>{fileState.name}</label>
                    </>
            }
            <p>Upload or drag & drop your image or PDF file. </p>
            <input type="file" accept="image/*" onChange={handleChange}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', opacity: 0 }} />
        </label>
    )
}


export default DropZone;
export { DropZone };