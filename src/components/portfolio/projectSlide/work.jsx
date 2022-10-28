import React from 'react'
import './work.css'
class Slide extends React.Component {
    constructor(props) {
        super(props)

        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.imageLoaded = this.imageLoaded.bind(this)
        this.slide = React.createRef()
    }

    handleMouseMove(event) {
        const el = this.slide.current
        const r = el.getBoundingClientRect()

        el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
        el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
    }

    imageLoaded(event) {
        event.target.style.opacity = 1
    }

    render() {
        return (
            <li
                ref={this.slide}
                className='slide--current'

                onMouseMove={this.handleMouseMove}

            >
                <div className="slide__image-wrapper">
                    <img
                        className="slide__image"
                        alt={this.props.data.headline}
                        src={this.props.data.src}
                        onLoad={this.imageLoaded}
                    />
                </div>
                <article className="slide__content">
                    <div className="headlines">
                        <h2 className="slide__headline">{this.props.data.headline}</h2>
                        {this.props.data.desc !== "" ? <small>{this.props.data.desc}<br /></small> : null} 
                        {this.props.data.href1 === "" ?
                        <a className="slide__action btn disabled" href={this.props.data.href1} target="_blank" rel="noopener noreferrer">{this.props.data.button1}</a>
                        : <a className="slide__action btn" href={this.props.data.href1} target="_blank" rel="noopener noreferrer">{this.props.data.button1}</a>}
                        {this.props.data.href2 !== "" ? <a className="slide__action btn" href={this.props.data.href2} target="_blank" rel="noopener noreferrer">{this.props.data.button2}</a> : null}
                    </div>
                    <div className="pics">
                        <img src={this.props.data.picOne} className="slide-pic-one" alt="slide-pic-one" />
                        <img src={this.props.data.picTwo} className="slide-pic-two" alt="slide-pic-two" />
                    </div>
                </article>
            </li>
        )
    }
}

export default Slide