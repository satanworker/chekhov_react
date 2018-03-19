import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import {
  getExampleCount, getExampleText, getExchangeRandom, increment,
  changeText
} from 'src/store/example'
import Example from 'src/modules/example/components/Example'

const mapStateToProps = state => ({
  count: getExampleCount(state),
  text: getExampleText(state),
  random: getExchangeRandom(state)
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increment()),
  onChange: text => dispatch(changeText(text))
})

export default translate()(
  connect(mapStateToProps, mapDispatchToProps)(Example)
)
