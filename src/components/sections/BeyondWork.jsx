import { hobbies } from "../../data/hobbies";
import { getImages } from "../../utils/media";
import Section from "../ui/Section";
import Gallery from "../ui/Gallery";

export default function BeyondWork() {
    return (
        <Section id="hobbies" title="Beyond work" intro={hobbies.text}>
            <div style={{ marginTop: 24 }}>
                <Gallery images={getImages(hobbies.mediaFolder)} />
            </div>
        </Section>
    );
}
