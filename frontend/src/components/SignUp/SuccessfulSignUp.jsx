// MUI Components
import { Button, Stack, Typography } from '@mui/material';

function SuccessfulSignUp() {
    return (
        <Stack spacing={2} useFlexGap>
            <Typography variant="h1">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 120 120">
                    <circle cx="60" cy="64" r="48" opacity=".35"></circle><circle cx="60" cy="60" r="48" fill="#44bf00"></circle><polygon points="53.303,89 26.139,61.838 33.582,54.395 53.303,74.116 86.418,41 93.861,48.443" opacity=".35"></polygon><polygon fill="#fff" points="53.303,84 26.139,56.838 33.582,49.395 53.303,69.116 86.418,36 93.861,43.443"></polygon>
                </svg></Typography>
            <Typography variant="h5">¡Registro exitoso!</Typography>
            <Button
                variant="contained"
                href="/"
                sx={{
                    alignSelf: 'start',
                    width: { xs: '100%', sm: 'auto' },
                }}
            >
                Volver al inicio
            </Button>
            <hr />
            <Typography variant="h7" style={{paddingBottom: '3rem'}}>
                Recuerda que para definir la admisión, se tendrán en cuenta los puntajes obtenidos por el aspirante en el Examen de Estado de la Educación Media, ICFES SABER 11, en las áreas que defina el Programa Académico y también el puntaje obtenido en las Pruebas Específicas de Admisión para los Programas Académicos que las exijan como criterio adicional de selección.
                <br /><br />
                La selección de los aspirantes se efectúa de la siguiente forma:
                <br />
                <ul>
                    <li>
                        Se realiza un ordenamiento de menor a mayor nota en cada una de las áreas en las que el Programa Académico haya asignado pesos específicos.
                    </li>
                    <li>
                        El puesto que ocupe el aspirante en cada área se multiplicará por el peso específico que el Programa le asignó al área respectiva. El peso específico se aplicará también a las Pruebas Específicas de Admisión, para los Programas que las exijan.
                    </li>
                    <li>
                        Se suman los productos y se realiza el ordenamiento, de acuerdo con esta suma, de mayor a menor.
                    </li>
                    <li>
                        Son admitidos los aspirantes que obtengan las mejores posiciones de la lista ordenada, de acuerdo con el número de cupos ofrecidos por el Programa.
                    </li>
                    <li>
                    Los resultados del proceso de admisión son publicados en la fecha comprometida para ello en la página Web del Área de Admisiones y en un diario de amplia circulación regional.
                    </li>
                </ul>
                <br />
                La información detallada sobre cada uno de los pasos que deberá realizar el admitido para oficializar su matrícula (financiera y académica),  la obtendrá ingresando al casillero digital, utilizando la clave de acceso adquirida para realizar la inscripción. Este casillero es personal.
                <br /><br />
                En el siguiente enlace podrás observar algunas estadísticas del comportamiento de los resultados de admisión de los períodos académicos anteriores:
                <br />
                http://admisiones.univalle.edu.co/new/estadisticas.php
                <br /><br />
                Mayor información en:
                <br />
                http://admisiones.univalle.edu.co
            </Typography>
        </Stack>
    )
}

export { SuccessfulSignUp };
export default SuccessfulSignUp;