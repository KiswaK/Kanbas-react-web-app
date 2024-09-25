import Lab1 from "./Lab1"
import Lab2 from "./Lab2"
import Lab3 from "./Lab3"
import teslaBot from '../images/teslabot.jpg'


export default function Labs(){
    return (
        <div>
            <h1>Labs</h1>
            <Lab1 />
  <h4>Paragraph Tag</h4>
    <p>
    This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.
</p>

<p>This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
</p>

<p>This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
</p>
        
         <h4>List Tags</h4>
         <h5>Ordered List Tag</h5>
         How to make pancakes:
         <ol>
         <li> Mix dry ingredients.</li>
         <li> Add wet ingredients.</li>
         <li> Stir to combine.</li>
         <li>Heat a skillet or griddle.</li>
         <li> Pour batter onto the skillet.</li>
         <li> Cook until bubbly on top.</li>
         <li> Flip and cook the other side.</li>
         <li> Serve and enjoy!</li>
         </ol>

         My favorite recipe: 
         <ol>
            <li> Mix flour, sugar </li>
            <li> Mix eggs, butter, milk </li>
            <li> combine all ingredients </li>
            <li> pour in waffle iron </li>
            <li> serve with toppings of choice </li>

        <h5> Unordered List tag</h5>
        My favorite books (in no particular order)
        <ul>
            <li>Dune</li>
            <li>Lord of the Rings</li>
            <li>Ender's Game</li>
            <li>Red Mars</li>
            <li>The Forever War</li>
            </ul>
         </ol>

         Your favorite books (in no particular order)
         <ul>
        <li>Little Women </li>
        <li>Just Kids </li>
        <li>White Nights </li>
        <li>Blue Sisters</li>  
         </ul>

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
              <td>55</td>
            </tr>
            <tr>
            <td>Q4</td>
              <td>JavaScript</td>
              <td>2/24/21</td>
              <td>75</td>
              </tr>
            <tr>
            <td>Q5</td>
              <td>JavaScript</td>
              <td>3/01/21</td>
              <td>95</td>
            </tr>
            <tr>
            <td>Q6</td>
              <td>JavaScript</td>
              <td>3/08/21</td>
              <td>100</td> 
            </tr>
            <tr>
            <td>Q7</td>
              <td>JavaScript</td>
              <td>3/15/21</td>
              <td>97</td> 
            </tr>
            <tr>
            <td>Q8</td>
              <td>JavaScript</td>
              <td>3/22/21</td>
              <td>75</td>
            </tr>
            <tr>
            <td>Q9</td>
              <td>JavaScript</td>
              <td>3/29/21</td>
              <td>90</td> 
            </tr>
            <tr>
            <td>Q10</td>
              <td>JavaScript</td>
              <td>3/05/21</td>
              <td>85</td> 
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>70</td>
            </tr>
          </tfoot>
        </table>

        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img id = "wd-starship"
        width= "400px"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />

        loading a local image: 
        <br />
        <img id = "wd-teslabot" src= {teslaBot} height= "200px" />

        <input type ="text"
        placeholder ="hint"
        title= "tooltip"
        value= "COMEDY"/>

<h4>Form Elements</h4>
  <form id="wd-text-fields">
    <h5>Text Fields</h5>
    <label htmlFor="username text">Username:</label>
    <input id="username text" placeholder="jdoe" /> <br />
    <label htmlFor="password">Password:</label>
    <input type="password" id="wd-text-fields-password" value="123@#$asd" />
    <br />
    <label htmlFor="wd-text-fields-first-name">First name:</label>
    <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
    <label htmlFor="wd-text-fields-last-name">Last name:</label>
    <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
      value="Wonderland" title="The last name" />
    {/* copy rest of form elements here  */}
  </form>

  <h4>Textarea</h4>
  <textarea cols={100}  rows = {40}
    placeholder = "biography"
    title = "tooltip"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor egestas faucibus. Ut sagittis nisl a sagittis sollicitudin. Nulla tincidunt, sapien eu volutpat bibendum, nisl velit dapibus magna, quis varius tortor dolor sit amet tellus. Sed elit odio, bibendum non sapien eu, molestie porttitor elit. Duis viverra tellus vitae turpis rutrum rhoncus. Vestibulum congue ullamcorper consequat. Nulla dignissim nisi id purus molestie finibus. Sed nec laoreet lorem. Duis diam enim, volutpat ac urna id, viverra blandit libero. Etiam turpis nibh, semper et enim id, venenatis laoreet magna. Integer eu ullamcorper sapien, vel malesuada enim.

Cras nunc velit, posuere tincidunt nibh a, faucibus bibendum sem. Aenean nibh eros, lobortis eleifend cursus ac, porttitor sed lectus. Duis non nulla vel felis euismod pulvinar. Sed aliquam, est ut elementum bibendum, purus urna ultricies nulla, nec viverra mi odio ac elit. Mauris hendrerit, eros quis semper hendrerit, est leo aliquet nulla, id scelerisque metus neque a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ipsum elit, aliquam eget tempus sed, ullamcorper sed purus. Morbi nec tempor turpis.

Cras lacinia commodo maximus. Nulla eros dui, ornare id metus ac, fermentum mollis lectus. Fusce sodales posuere mattis. Phasellus sollicitudin luctus elit ut finibus. Donec diam nunc, tempor at tempor at, vulputate condimentum ante. Aenean odio lacus, fringilla quis tellus in, rhoncus iaculis diam. Duis vitae elementum leo, sed semper purus. Curabitur tincidunt semper nibh sed tristique. In hac habitasse platea dictumst. Praesent dolor arcu, vestibulum vitae ornare egestas, consequat id tellus. Nulla id lacus facilisis augue ornare sagittis. Nullam elementum vel ante in tristique.

Sed finibus fermentum faucibus. Donec feugiat vitae tortor id commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam at felis nisl. Mauris cursus eros lectus, nec pellentesque lorem volutpat nec. Donec dignissim lacus ac velit egestas tristique. Nam consectetur lectus ac ante viverra congue. Suspendisse sit amet laoreet ligula. Cras luctus volutpat tellus nec viverra. In hac habitasse platea dictumst.

Nulla eget molestie purus. Nulla porttitor mauris erat, sit amet porta dolor eleifend in. Nam ut enim eget est laoreet bibendum. Sed ac finibus nibh, vel consequat sem. Praesent tincidunt dignissim mauris, a pharetra urna tincidunt et. Cras euismod, elit at faucibus rutrum, sem libero aliquet nunc, sit amet semper diam nisl ac nunc. Aenean quis est at justo commodo aliquet. Proin congue sit amet nisi condimentum ultrices. Morbi vehicula nibh tincidunt gravida bibendum. Maecenas ultrices nulla non vehicula fermentum. Morbi ultrices turpis eget lacus consequat, eget rhoncus augue imperdiet. Nunc facilisis libero at erat aliquam, ac semper dolor pretium. Nulla leo enim, semper sed ipsum ac, iaculis lacinia est. Curabitur vel venenatis dui, in efficitur diam. Duis vitae sollicitudin tellus, vitae pharetra felis.

 </textarea>

 <h5 id= "Buttons">Buttons</h5>

<button id = "wd-all-good" onClick={() => alert("everything is good")} type = "button">
    Hello World!
</button>

<h5>File upload</h5>
<input id="wd-upload" type="file"/>

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
<label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
<select id="wd-select-one-genre">
   <option value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
</select>

<h5>Select many</h5>
<label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
<select id="wd-select-many-genre" multiple>
   <option selected value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
</select>


<h4>Other HTML field types</h4>

<label htmlFor="wd-text-fields-email"> Email: </label>
<input type="email"
      placeholder="jdoe@somewhere.com"
      id="wd-text-fields-email"/><br/>

<label htmlFor="wd-text-fields-salary-start"> Starting salary:
</label>
<input type="number"
      id="wd-text-fields-salary-start"
      placeholder="1000"
      value="100000"/><br/>

<label htmlFor="wd-text-fields-rating"> Rating: </label>
<input type="range" id="wd-text-fields-rating"
      placeholder="Doe"
      max="5"
      value="4"/><br/>

<label htmlFor="wd-text-fields-dob"> Date of birth: </label>
<input type="date"
      id="wd-text-fields-dob"
      value="2000-01-21"/><br/>

<h4>Anchor tag</h4>
Please
<a id="wd-lipsum" href="https://www.lipsum.com">click here</a>
to get dummy text<br/>

Please 
<a id="git repo" href="https://github.com/KiswaK/Kanbas-react-web-app"> click here</a>
to see the repository<br/>















      </div>
   );
 }

