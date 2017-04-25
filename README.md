# performer

Process chainer

### Usage

```
perform(instructions, input).then((output) => { ... });
```

### Instructions

Chain commands together in a comma separated list, for example:

```
file/in, str/tldr, str/upper
```

##### Available Instructions

Available instructions can be found in the src/modules folder.

- `file/in`
- `str/upper`
- `str/tldr`
