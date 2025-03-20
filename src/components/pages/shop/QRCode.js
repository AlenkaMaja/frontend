import ReactDOM from 'react-dom';
import { QRCodeSVG } from 'qrcode.react';
import { faEur } from '@fortawesome/free-solid-svg-icons';
import { faDAndD } from '@fortawesome/free-brands-svg-icons';

const QRCode = ({form}) => {
    const paymentInfo = "HRVHUB30\n"
    +"EUR" 
    +"00000000012355\n"
    +"PETAR KORETIĆ\n"
    +"PREVOJ DD\n"
    +"10000 Zagreb\n"
    +"QAAP JSON.D.O.O.\n"
    +"Prevoj DD\n"
    +"10000 Zagreb\n"
    +"HR5041240000000000\n"
    +"HR01\n"
    +"7336-68949637625-00001\n"
    +"COST\n"
    + "Uplata za 1. mjesec";

return(
    <p className="p-5 text-center">
        <QRCodeSVG value={paymentInfo} size={256} />
    </p>

);
}
export default QRCode;