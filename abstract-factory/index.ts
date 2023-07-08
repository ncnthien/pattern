// Imagine you write a creation UI for macOS and Windows, so you should design a product and factory first
abstract class Button {
    onClick: () => void
    text: string
}

abstract class CheckBox {
    onCheck: () => void
    text: string
}

abstract class Factory {
    createButton: () => Button
    createCheckBox: () => CheckBox
}

// Then you create concrete classes variant that implements these classes above
// macOS
class MacButton extends Button {
    onClick = () => {
        console.log('This is MacButton')
    };
    text = 'Mac button'
}

class MacCheckbox extends CheckBox {
    onCheck = () => {
        console.log('This is MacCheckBox')
    }
    text = 'Mac checkBox'
}

class MacFactory extends Factory {
    createButton = () => new MacButton()
    createCheckBox = () => new MacCheckbox()
}

// Similar, with Windows instead
class WindowsButton extends Button {
    onClick = () => {
        console.log('This is WindowsButton')
    };
    text = 'Windows button'
}

class WindowsCheckbox extends CheckBox {
    onCheck = () => {
        console.log('This is WindowsCheckBox')
    }
    text = 'Windows checkBox'
}

class WindowsFactory extends Factory {
    createButton = () => new WindowsButton()
    createCheckBox = () => new WindowsCheckbox()
}

// And then, in client code, depend on the situation, you can initialize macOS or Windows UI
// In client code
const macFactory = new MacFactory()
const windowsFactory = new WindowsFactory()

const macButton = macFactory.createButton()
const macCheckbox = macFactory.createCheckBox()

const windowsButton = windowsFactory.createButton()
const windowsCheckbox = windowsFactory.createCheckBox()

// With definition like this, all of our products have the same constructor
// macButton and windowsButton have Button class
// macCheckbox and windowsCheckbox have Checkbox class
