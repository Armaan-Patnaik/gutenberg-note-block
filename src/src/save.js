import { RichText } from '@wordpress/block-editor';
export default function save({ attributes }) {
  return <RichText.Content tagName="div" value={attributes.note} />;
}
