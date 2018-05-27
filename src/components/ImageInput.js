import React from 'react'
import PropTypes from 'prop-types'

const readFileAsDataURL = file =>
  new Promise(resolve => {
    const reader = new FileReader()

    reader.onload = event => {
      resolve(event.target.result)
    }

    reader.readAsDataURL(file)
  })

const resizeImage = (imageURL, canvas, maxHeight) =>
  new Promise(resolve => {
    const image = new Image()

    image.onload = () => {
      const context = canvas.getContext('2d')

      if (image.height > maxHeight) {
        image.width *= maxHeight / image.height
        image.height = maxHeight
      }

      context.clearRect(0, 0, canvas.width, canvas.height)
      canvas.width = image.width
      canvas.height = image.height

      context.drawImage(image, 0, 0, image.width, image.height)

      resolve(canvas.toDataURL('image/jpeg'))
    }

    image.src = imageURL
  })

/**
 * A custom <input> that dynamically reads and resizes image files before
 * submitting them to the server as data URLs. Also, shows a preview of the image.
 */
class ImageInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    maxHeight: PropTypes.number,
    onValueChange: PropTypes.func,
    required: PropTypes.bool
  }

  state = {
    value: ''
  }
  updateValue = value => {
    this.setState({ value })
    this.props.onValueChange(value)
  }

  handleFileChange = event => {
    const file = event.target.files[0]

    if (file && file.type.match(/^image\//)) {
      readFileAsDataURL(file).then(originalURL => {
        resizeImage(originalURL, this.canvas, this.props.maxHeight).then(url => {
          this.updateValue(url)
        })
      })
    } else {
      this.updateValue('')
    }
  }

  handleFormReset = () => {
    this.updateValue('')
  }

  componentDidMount() {
    this.canvas = document.createElement('canvas')
    this.fileInput.form.addEventListener('reset', this.handleFormReset)
  }

  componentWillUnmount() {
    this.fileInput.form.removeEventListener('reset', this.handleFormReset)
  }

  render() {
    const { className, name, required } = this.props
    const { value } = this.state

    const style = {
      position: 'relative',
      marginBottom: '2em'
    }

    if (value) {
      style.backgroundImage = `url("${value}")`
      style.backgroundRepeat = 'no-repeat'
      style.backgroundPosition = 'center'
      style.backgroundSize = 'cover'
    }

    return (
      <div className={className} style={style}>
        <input required type="hidden" name={name} value={value} />
        <input
          ref={node => (this.fileInput = node)}
          type="file"
          onChange={this.handleFileChange}
          required={required}
          className="form-control"
          style={{
            width: '100%',
            height: '100%',
            opacity: 0
          }}
        />
        <div className="invalid-feedback" style={{ minWidth: '200px' }}>
          Please choose an avatar.
        </div>
      </div>
    )
  }
}

export default ImageInput
