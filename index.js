import { compile, serialize, stringify, tokenize } from "stylis";

const css = `
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}

.message, .success, .error, .warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}
`;

console.time("process");
console.log([...new Set(tokenize(css))]);
console.timeEnd("process");
