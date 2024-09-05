export default function Home() {
  return (
    <div className="p-12">
      <h1 className="ds">Heading 1</h1>
      <h2 className="ds">Heading 2</h2>
      <h3 className="ds">Heading 3</h3>
      <h4 className="ds">Heading 4</h4>
      <h5 className="ds">Heading 5</h5>
      <h6 className="ds">Heading 6</h6>

      <p className="ds">Paragraph</p>

      <a href="#" className="ds">
        Link
      </a>

      <img
        src="https://images.unsplash.com/photo-1724075682209-449fa519694b?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Image"
        className="ds"
      />

      <input type="text" className="ds" />

      <ul className="ds">
        <li>Unordered List Item</li>
      </ul>

      <ol className="ds">
        <li>Ordered List Item</li>
      </ol>

      <table className="ds">
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
        <input type="text" className="ds" />
        <textarea rows={4} cols={50} className="ds">
          Textarea
        </textarea>
        <select className="ds">
          <option>Select Option</option>
        </select>
      </form>

      <div className="ds">Division</div>
      <span className="ds">Span</span>

      <strong className="ds">Strong</strong>
      <em className="ds">Emphasis</em>

      <br />
      <hr />
    </div>
  );
}
