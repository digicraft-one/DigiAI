import ImageNode from './input/ImageNode';
import PDFNode from './input/PDFNode';
import TextNode from './input/TextNode';
import UrlNode from './input/UrlNode';
import LLMNode from './processing/LLMNode';
import ImageGenerationNode from './processing/ImageGenerationNode';

const nodeTypes = {
  imageNode: ImageNode,
  pdfNode: PDFNode,
  textNode: TextNode,
  urlNode: UrlNode,
  llmNode: LLMNode,
  imageGenerationNode: ImageGenerationNode,
};

export default nodeTypes;