export default function Home() {
  return (
    <div className="p-12 craft">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <p>Paragraph</p>

      <a href="#">Link</a>

      <button>Button</button>

      <img src="image.jpg" alt="Image" />

      <input type="text" />

      <ul>
        <li>Unordered List Item</li>
      </ul>

      <ol>
        <li>Ordered List Item</li>
      </ol>

      <table>
        <thead>
          <tr>
            <th>Table Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table Data</td>
          </tr>
        </tbody>
      </table>

      <form>
        <label>Label</label>
        <input type="text" />
        <textarea rows={4} cols={50}>
          Textarea
        </textarea>
        <select>
          <option>Select Option</option>
        </select>
      </form>

      <div>Division</div>
      <span>Span</span>

      <strong>Strong</strong>
      <em>Emphasis</em>

      <br />
      <hr />
    </div>
  );
}
