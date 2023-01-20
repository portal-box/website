<script lang="ts">
  import '../app.css';
  export let disabled: boolean = false,
    href: string | null,
    buttonType: keyof typeof buttonHexColors;

  const buttonHexColors = {
    primary: { bg: '#FFFFFF', text: '#000000' },
    secondary: { bg: '#434347', text: '#FFFFFF' },
    key: { bg: '#E2AB3F', text: '#FFFFFF' },
  };

  const bgColor = buttonHexColors[buttonType].bg;
  const textColor = buttonHexColors[buttonType].text;
</script>

<a
  {href}
  target="_blank"
  rel="noreferrer"
  style="background-color:{bgColor};color:{textColor};{disabled
    ? 'pointer-events:none;'
    : ''}"
  class="w-fit flex items-center justify-center rounded-full px-5 py-3 {disabled
    ? 'opacity-50 cursor-no-drop'
    : ''} {$$props.class ?? ''}"
>
  <slot />
</a>
