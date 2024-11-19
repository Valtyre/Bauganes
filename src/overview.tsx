import Content from './content';

export default function Overview() {
    return (
        <div>
            <header>
                Bauganes 1a
            </header>
            <img 
                id="homeImage" 
                src="Bauganes1a/src/assets/house.png" 
                alt="Bauganes" 
            />
            {Content()}
        </div>
    );
}