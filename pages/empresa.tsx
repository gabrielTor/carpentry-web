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
            {true ? null :
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