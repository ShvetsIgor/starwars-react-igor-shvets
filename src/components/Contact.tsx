import {useEffect, useState} from "react";

const Contact = () => {
    const [planetNames, setPlanetNames] = useState<string[]>([]);

    useEffect(() => {
        (async () => {

            const currName = localStorage.getItem("planetNames");
            if (currName) {
                setPlanetNames(JSON.parse(currName))
            }
            else {
                try {
                    const response = await fetch("https://sw-info-api.herokuapp.com/v1/planets")
                    if (!response.ok) throw Error("Failed to fetch planets");

                    const data = await response.json();
                    const names = data.map((planet: { name: string }) => planet.name);
                    setPlanetNames(names);

                    localStorage.setItem("planetNames", JSON.stringify(names)); //
                    localStorage.setItem("timestamp", new Date().getTime().toString()); //

                } catch (e) {
                    console.log(e)
                    setPlanetNames([])
                }
            }
        })()

    }, []);

    return (
        <div className="contact">
            <form action="action_page.php">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                <label htmlFor="planet">Planet</label>

                <select id="planet" name="planet">
                    <option value="">Select a planet</option>
                    {planetNames.map((name, index) => (
                        <option key={index} value={name}>{name}</option>
                    ))}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{height: "200px"}}
                ></textarea>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Contact;