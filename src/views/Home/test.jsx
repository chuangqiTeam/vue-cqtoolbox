const groupClass = [
  'cq-primary'
]
const buttonClass = [
]
export default {
  name: 'component',
  render (h) {
    return (
      <div>
        <cq-button-group class={groupClass} single>
          <cq-button class={buttonClass}>中文</cq-button>
          <cq-button class={buttonClass} disabled>EN</cq-button>
          <cq-button class={buttonClass}>其他</cq-button>
        </cq-button-group>
      </div>
    )
  }
}
