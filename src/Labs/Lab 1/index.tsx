export default function Lab1() {
    return (
    <div id="wd-lab1">
    <h2>Lab 1</h2>
        <div id="wd-h-tag">
            <h4>Paragraph Tag</h4>
            <p id="wd-p-1"> 
                This is the first paragraph. The paragraph tag is used to format
                vertical gaps between long pieces of text like this one.
            </p>
            <p id="wd-p-2">
                This is the second paragraph. Even though there is a deliberate white
                gap between the paragraph above and this paragraph, by default
                browsers render them as one contiguous piece of text as shown here on
                the right.
            </p>
            <p id="wd-p-3">
                This is the third paragraph. Wrap each paragraph with the paragraph
                tag to tell browsers to render the gaps.
            </p>
        </div>

        <div id="wd-lists">
            <h4>List Tags</h4>
            <h5>Ordered List Tag</h5>
            How to make pancakes:
            <ol id="wd-pancakes">
                <li>Mix dry ingredients.</li>
                <li>Add wet ingredients.</li>
                <li>Stir to combine.</li>
                <li>Heat a skillet or griddle.</li>
                <li>Pour batter onto the skillet.</li>
                <li>Cook until bubbly on top.</li>
                <li>Flip and cook the other side.</li>
                <li>Serve and enjoy!</li>
            </ol>

            My favorite recipe:
            <ol id="Lasagna Pasta">
                <li>Get beef, parmesan, vodka sauce, ricotta, and pasta</li>
                <li>Cook pasta and put beef on skillet</li>
                <li>Once beef is cooked, add vodka sauce, ricotta, and parmesan. Let simmer on low</li>
                <li>Add pasta and mix</li>
                <li>Serve and enjoy!</li>
            </ol>


            <h5>Unordered List Tag</h5>
            Your favorite books (in no particular order)
            <ul id="wd-my-books">
                <li>Dune</li>
                <li>Lord of the Rings</li>
                <li>Ender's Game</li>
                <li>Red Mars</li>
                <li>The Forever War</li>
            </ul>

            My favorite books (in no particular order)
            <ul id="wd-your-books">
                <li>1984</li>
                <li>Living Untethered</li>
                <li>Frankenstein</li>
            </ul>
        </div>

        <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">  
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
        
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>

            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>

            <tr>
              <td>Q4</td>
              <td>TypeScript</td>
              <td>2/24/21</td>
              <td>98</td>
            </tr>

            <tr>
              <td>Q5</td>
              <td>Java</td>
              <td>2/30/21</td>
              <td>80</td>
            </tr>

            <tr>
              <td>Q6</td>
              <td>Algorithms</td>
              <td>3/2/21</td>
              <td>87</td>
            </tr>

            <tr>
              <td>Q7</td>
              <td>React</td>
              <td>3/10/21</td>
              <td>85</td>
            </tr>

            <tr>
              <td>Q8</td>
              <td>Booleans</td>
              <td>3/18/21</td>
              <td>75</td>
            </tr>

            <tr>
              <td>Q9</td>
              <td>Cats</td>
              <td>3/25/21</td>
              <td>100</td>
            </tr>

            <tr>
              <td>Q10</td>
              <td>Processing</td>
              <td>4/1/21</td>
              <td>90</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
        </div>

        <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet: <br />
            <img id="wd-starship" width="400px"
            src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
            <br />
            Loading a local image:
            <br />
            <img id="wd-teslabot" src="teslabot.jpg" height="200px" />
        </div>

        <div id="wd-forms">
            <h4>Form Elements</h4>
            <form id="wd-text-fields">
                <h5>Text Fields</h5>
                <label htmlFor="wd-text-fields-username">Username: </label>
                <input placeholder="jdoe" id="wd-text-fields-username" /> <br />

                <label htmlFor="wd-text-fields-password">Password: </label>
                <input type="password" value="123@#$asd" id="wd-text-fields-password" /> <br />

                <label htmlFor="wd-text-fields-first-name">First name: </label>
                <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
            
                <label htmlFor="wd-text-fields-last-name">Last name: </label>
                <input type="text" placeholder="Doe"
                    value="Wonderland"
                    title="The last name"
                    id="wd-text-fields-last-name" /> <br />
            
                <label htmlFor="wd-text-fields-genre">Genre: </label>
                <input type="text"
                placeholder="hint"
                title="tooltip"
                value="COMEDY"/>
            </form>

            <form>
                <h4>Other HTML field types</h4>

                <label htmlFor="wd-text-fields-email"> Email: </label>
                <input type="email"
                       placeholder="jdoe@somewhere.com"
                       id="wd-text-fields-email"/><br/>

                <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
                <input type="number"
                       value="100000"
                       placeholder="1000"
                       id="wd-text-fields-salary-start"/><br/>

                <label htmlFor="wd-text-fields-rating"> Rating: </label>
                <input type="range"
                       value="4"
                       max="5"
                       placeholder="Doe"
                       id="wd-text-fields-rating"/><br/>

                <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
                <input type="date"
                       value="2000-01-21"
                       id="wd-text-fields-dob"/><br/>
            </form>
        </div>

        <div id="wd-text-areas">
            <h5>Text Boxes</h5>
            <textarea cols={50} rows={10} placeholder="biography">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi nulla, 
            interdum feugiat lacus vitae, malesuada eleifend libero. Donec turpis dui, tempus at 
            feugiat at, gravida at metus. Sed molestie egestas ligula ac iaculis. Curabitur 
            posuere lacinia magna sed pulvinar. Integer ac dui turpis. Vivamus a tempus risus, 
            eu blandit dui. Maecenas eu tortor eu urna elementum mattis. In nisi arcu, porttitor 
            sit amet elit ac, varius elementum est. Nunc ac dapibus elit. Aliquam gravida turpis 
            quis dolor blandit, interdum pretium nisl venenatis. Donec faucibus justo et lacinia tempor. 
            Vestibulum aliquet mauris mauris, in elementum massa rutrum at. Nunc urna augue, convallis 
            vitae eleifend a, accumsan id lectus. Sed tincidunt vitae magna commodo facilisis. Duis sed 
            eros id est iaculis faucibus. Sed vel eleifend orci, quis interdum magna.
            Vivamus porttitor, nunc id consequat eleifend, augue purus dictum purus, id vestibulum metus
            diam quis sapien. Ut molestie quis sem nec vehicula. Fusce sed volutpat lorem, id sodales justo. 
            Ut condimentum neque ligula, euismod suscipit lacus ullamcorper nec. Duis sagittis, tortor at ultricies 
            pellentesque, enim sem congue erat, eget consequat risus risus et elit. Proin sed libero dolor. Praesent 
            orci urna, porttitor sed neque eu, volutpat pellentesque eros. Donec malesuada ultrices orci quis tempor. 
            Fusce eleifend condimentum magna. Aliquam vel cursus purus. Duis lobortis, magna vitae rhoncus fermentum, 
            lectus libero venenatis ipsum, in mollis libero nibh elementum sem. Nullam tempor, ligula ac hendrerit tempus, 
            justo elit aliquet ante, ut sagittis eros neque nec metus. Morbi egestas libero ante, porttitor finibus nisi 
            tempus pellentesque. Sed efficitur dolor eget tellus dignissim accumsan. Donec ac lorem ante. Ut blandit quam 
            eget risus scelerisque suscipit.
            </textarea>
        </div>

        <div id="wd-interactive-buttons">
        <h4 id="wd-buttons">Buttons</h4>
        <button type="button"
        onClick={() => alert("Life is Good!")}
        id="wd-all-good">
        Hello World!
        </button>

        <h5 id="wd-radio-buttons">Radio buttons</h5>
        <label>Favorite movie genre:</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
        <label htmlFor="wd-radio-comedy">Comedy</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-drama"/>
        <label htmlFor="wd-radio-drama">Drama</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
        <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
        <label htmlFor="wd-radio-fantasy">Fantasy</label>
        

        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Favorite movie genre:</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
        <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
        <label htmlFor="wd-chkbox-drama">Drama</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
        <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
        <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

        <h4 id="wd-dropdowns">Dropdowns</h4>

        <h5>Select one</h5>
        <label  htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
        <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
                Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
        </select>

        <h5>Select many</h5>
        <label htmlFor="wd-select-many-genre">Favorite movie genres:</label><br />

        <select multiple id="wd-select-many-genre" name="movie-genres[]">
            <option value="COMEDY" selected>Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI" selected>Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
</select>
        </div>


        <div id="wd-anchor-tags">
            <h4>Anchor tag</h4>
            Please 
            <a href="https://www.lipsum.com" id="wd-lipsum"> click here </a>
            to get dummy text<br/>

            <h4>Github Repo</h4>
            Please
            <a href="https://github.com/jackiedeieso/kambaz/tree/main" id="wd-lipsum"> click here </a>
            to my Github repo<br/>
        </div>

    </div>
  );}
  