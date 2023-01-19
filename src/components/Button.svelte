<script lang="ts">
  import '../app.css';
  export let disabled: boolean = false,
    href: string,
    buttonType: keyof typeof buttonHexColors;

  const buttonHexColors = {
    primary: { bg: '#FFFFFF', text: '#000000' },
    secondary: { bg: '#434347', text: '#FFFFFF' },
    key: { bg: '#E2AB3F', text: '#FFFFFF' },
  };

  const bgColor = buttonHexColors[buttonType].bg;
  const textColor = buttonHexColors[buttonType].text;
</script>

<a {href} target="_blank" rel="noreferrer" class="w-full"
  ><button
    class="flex items-center justify-center rounded-full py-2 px-10 text-[16px] {$$props.class ??
      ''} {disabled ? 'opacity-50 cursor-no-drop' : ''}}"
    {disabled}
    style="background-color:{bgColor};color:{textColor};"><slot /></button
  ></a
>
