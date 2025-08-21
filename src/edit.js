import { RichText } from '@wordpress/block-editor';
export default function Edit({ attributes, setAttributes }) {
  const { note } = attributes;
  return (
    <div className="note-block">
      <RichText
        tagName="div"
        value={note}
        onChange={(val) => setAttributes({ note: val })}
        placeholder="Write a note..."
      />
    </div>
  );
}
