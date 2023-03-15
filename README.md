# Select Component

3가지 방식으로 select component를 구현
![select component](https://user-images.githubusercontent.com/76088728/225224334-f139657a-d1eb-4b4e-b516-cde3099f0720.gif)

1. compound component
2. render props
3. custom hook

# 실행 방법

### 1. repository clone

```
git clone https://github.com/seonsy44/select-component.git
```

### 2. 의존성 설치 및 실행

```
npm install
npm run dev

```

# 구현 기능

```html
<div className="select">
  <label className="select-label">Title: </label>
  <button className="select-button">selected option</button>

  <ul className="select-options">
    <li className="select-option selected" tabindex="0">JavaScript</li>
    <li className="select-option" tabindex="0">ReactJS</li>
    <li className="select-option" tabindex="0">NextJS</li>
    <li className="select-option" tabindex="0">HTML</li>
    <li className="select-option" tabindex="0">CSS</li>
  </ul>
</div>
```

- 위와 같은 인터페이스
- 키보드 및 마우스 액션으로 `Options` 영역을 open 및 close가 가능
- `Options`가 open 상태일 때 선택 된 `Option`에 포커스 되어있음
- 마우스뿐만 아니라 키보드로도 `Option` 탐색 및 선택 가능
- `Select Component` 외부 영역 클릭 시 `Options`는 close 됨

# 3가지 구현 방식

## 1. compound component (📎 [코드](https://github.com/seonsy44/select-component/tree/main/src/CompoundComponent))

```ts
function CompoundComponent() {
  const selectRef = useRef<HTMLDivElement>(null);
  const handleChange = (option: OptionType) => {
    console.log(`${option.name}: API /${option.id}`);
  };
  const handleSelectClose = () => focusOnButton(selectRef);

  return (
    <Select
      className="select"
      selectRef={selectRef}
      defaultOption={options[0]}
      onSelectChange={handleChange}
      onSelectClose={handleSelectClose}
    >
      <Select.Label className="select-label">Compound Component: </Select.Label>
      <Select.Button className="select-button" />
      <Select.Options className="select-options">
        {options.map(({ id, name }) => (
          <Select.Option className="select-option" id={id} name={name} key={id} />
        ))}
      </Select.Options>
    </Select>
  );
}
```

**component 구현**

- Select component 내부에서 상태 값을 공유(Context API)
- 구현을 위해 작성해야 하는 코드량이 비교적 많음

**component 사용**

- 비교적 가독성이 좋음(선언적이므로 무엇을 하고자 하는지 파악하기 쉬움)
- 자식 컴포넌트의 순서가 잘못되거나, 필요한 자식 컴포넌트가 없을 수 있음

## 2. render props (📎 [코드](https://github.com/seonsy44/select-component/tree/main/src/RenderProp))

```ts
function RenderPropSelect() {
  const selectRef = useRef<HTMLDivElement>(null);
  const handleChange = (option: OptionType) => {
    console.log(`${option.name}: API /${option.id}`);
  };
  const handleSelectClose = () => focusOnButton(selectRef);

  return (
    <Select selectRef={selectRef} defaultOption={options[0]} onSelectChange={handleChange} onSelectClose={handleSelectClose}>
      {({ isOpened, selectedOption, buttonProps, optionsProps, optionProps }) => {
        return (
          <div className="select" ref={selectRef}>
            <label className="select-label">Render Prop: </label>
            <button className="select-button" {...buttonProps}>
              {selectedOption.name}
            </button>
            {isOpened && (
              <ul className="select-options" {...optionsProps}>
                {options.map((option: OptionType) => (
                  <li
                    key={option.id}
                    className={`select-option${selectedOption.id === option.id ? " selected" : ""}`}
                    data-id={option.id}
                    {...optionProps}
                  >
                    {option.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }}
    </Select>
  );
}
```

**component 구현**

- 구현을 위해 작성해야 하는 코드량이 compound component 패턴보다 적음

**component 사용**

- return 하는 element의 depth가 깊다는 점에서 다른 방식들과 달리 가독성이 떨어짐
- 사용자 측에서 상태 값들을 사용
  - 사용자에게 제어권이 부여됨(사용자가 로직을 추가하여 기본 컴포넌트 동작을 변경할 수 있음)
  - 각 상태 값이 의도된 곳에 사용되지 않은 수 있음

## 3. custom hook (📎 [코드](https://github.com/seonsy44/select-component/tree/main/src/CustomHook))

```ts
function CustomHookSelect() {
  const selectRef = useRef<HTMLDivElement>(null);
  const handleChange = (option: OptionType) => {
    console.log(`${option.name}: API /${option.id}`);
  };
  const handleSelectClose = () => focusOnButton(selectRef);

  const { isOpened, selectedOption, buttonProps, optionsProps, optionProps } = useSelect({
    selectRef,
    defaultOption: options[0],
    onSelectChange: handleChange,
    onSelectClose: handleSelectClose,
  });

  return (
    <div className="select" ref={selectRef}>
      <label className="select-label">Custom Hook: </label>
      <button className="select-button" {...buttonProps}>
        {selectedOption.name}
      </button>

      {isOpened && (
        <ul className="select-options" {...optionsProps}>
          {options.map((option: OptionType) => (
            <li
              key={option.id}
              data-id={option.id}
              className={`select-option${selectedOption?.id === option.id ? " selected" : ""}`}
              {...optionProps}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

**component 구현**

- 구현을 위해 작성해야 하는 코드량이 가장 적음

**component 사용**

- 사용자 측에서 상태 값들을 사용
  - 사용자에게 제어권이 부여됨(사용자가 로직을 추가하여 기본 컴포넌트 동작을 변경할 수 있음)
  - 각 상태 값이 의도된 곳에 사용되지 않은 수 있음
