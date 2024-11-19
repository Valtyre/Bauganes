import Textbox from './Info/textbox';
import InfoBoxHus from './Info/infoboxHus';
import imageHus from './Info/imageHus';
import InfoBoxIbud from './Info/infoboxIbud';
import imageIbud from './Info/imageIbud';




export default function Content() {
 return (
 <div id = "content">
    {Textbox()}
    <div id = "notText">
        <div id = "element">
            {InfoBoxHus()}
            {imageHus()}
        </div>
        <div id = "element">
            {InfoBoxIbud()}
            {imageIbud()}
        </div>
    </div>
 </div>
 );
}