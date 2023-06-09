import { NextPage } from "next"
import TextImg from "../components/common/TextImg"
import img from '../assets/whatwedo.png'

const data = [
    { header: 'LO QUE HACEMOS', image: img, style: 'container', info: 'We provide our clients with years of experience of work with hardwoods, traditional plywood and the most exotic wood veneers which set the standard for a superior craftsmanship and an exceptional finish. Our finishing team is capable of matching any existing finish or creates the desirable client’s expectation.' },
    { header: 'LO QUE HACEMOS', image: img, style: 'reverse', info: 'We provide our clients with years of experience of work with hardwoods, traditional plywood and the most exotic wood veneers which set the standard for a superior craftsmanship and an exceptional finish. Our finishing team is capable of matching any existing finish or creates the desirable client’s expectation.' },
    { header: 'LO QUE HACEMOS', image: img, style: 'container', info: 'We provide our clients with years of experience of work with hardwoods, traditional plywood and the most exotic wood veneers which set the standard for a superior craftsmanship and an exceptional finish. Our finishing team is capable of matching any existing finish or creates the desirable client’s expectation.' },
    { header: 'LO QUE HACEMOS', image: img, style: 'reverse', info: 'We provide our clients with years of experience of work with hardwoods, traditional plywood and the most exotic wood veneers which set the standard for a superior craftsmanship and an exceptional finish. Our finishing team is capable of matching any existing finish or creates the desirable client’s expectation.' },
]

const Empresa: NextPage = () => {
    return (
        <>
            {true ? 
                <div className='underContruction'>
                    <h1>Pagina esta en desarrollo</h1>
                    <p>Esta pagina está actualmente en construcción. Por favor, vuelva más tarde para las actualizaciones.</p>
                </div>
            :
                data.map(({ header, image, style, info }) => (
                    <TextImg key={header}
                        header={header}
                        image={image}
                        info={info}
                        style={style}
                    />
                ))
            }
        </>
    )
}

export default Empresa