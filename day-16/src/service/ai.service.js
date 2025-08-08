const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image ." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config: {
      systemInstruction: `
        tum mujhe jayada bada nhi bas 2 line ka caption do 
        or mujhe ye enflish me hi chaiye 
        or ek hi caption chaiye 
        orr ha emoji use kar or hashtag bhi 
         ye nhi Here's one English caption for you:
        `,
    },
  });
  return response.text;
}

module.exports = generateCaption;
