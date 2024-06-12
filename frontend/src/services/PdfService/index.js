import { getDocument } from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker'


const extractImages = (pdf, setFile) => {
    getDocument(pdf).promise
        .then(pdfDoc => { console.log('Finally Here'); return pdfDoc.getPage(1) })
        .then(async pdfPage => ({ pdfPage: pdfPage, operatorList: await pdfPage.getOperatorList() }))
        .then(({ pdfPage, operatorList }) => {
            const imgIndex = operatorList.fnArray.indexOf(85);
            const imgArgs = operatorList.argsArray[imgIndex];
            const { bitmap } = pdfPage.objs.get(imgArgs[0]);

            const canvas = document.createElement('canvas');
            canvas.width = bitmap.width;
            canvas.height = bitmap.height;
            const ctx = canvas.getContext('2d');
            const imageData = ctx.createImageData(bitmap.width, bitmap.height);
            imageData.data.set(bitmap.data);
            ctx.putImageData(imageData, 0, 0);
            const dataUrl = canvas.toDataURL();

            pdf.url = dataUrl;

            setFile(pdf);
        });
}

export { extractImages };