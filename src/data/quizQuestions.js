export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'How would you describe your skin texture and natural tendencies?',
    options: [
      {
        text: 'Dry, thin, prone to flakiness, rough patches, and fine lines',
        dosha: 'vata',
        label: 'Vata Characteristic'
      },
      {
        text: 'Sensitive, warm, prone to redness, sun spots, or breakouts in heat',
        dosha: 'pitta',
        label: 'Pitta Characteristic'
      },
      {
        text: 'Thick, oily or combination, smooth, prone to congested pores',
        dosha: 'kapha',
        label: 'Kapha Characteristic'
      }
    ]
  },
  {
    id: 2,
    question: 'What describes your hair type and primary scalp concern?',
    options: [
      {
        text: 'Dry, frizzy, brittle strands, split ends, and dry scalp itching',
        dosha: 'vata',
        label: 'Vata Characteristic'
      },
      {
        text: 'Fine, thinning hair, scalp heat, premature silver strands, or hair fall',
        dosha: 'pitta',
        label: 'Pitta Characteristic'
      },
      {
        text: 'Thick, heavy, wavy hair, oily scalp, or stubborn wet dandruff',
        dosha: 'kapha',
        label: 'Kapha Characteristic'
      }
    ]
  },
  {
    id: 3,
    question: 'How is your daily energy and physical pace?',
    options: [
      {
        text: 'Quick bursts of creativity, easily fatigued, restless, moves fast',
        dosha: 'vata',
        label: 'Vata Characteristic'
      },
      {
        text: 'High-driven, ambitious, focused, intense, gets impatient or hot easily',
        dosha: 'pitta',
        label: 'Pitta Characteristic'
      },
      {
        text: 'Steady, calm, great endurance, slow to start, loves comfort and routine',
        dosha: 'kapha',
        label: 'Kapha Characteristic'
      }
    ]
  },
  {
    id: 4,
    question: 'How is your digestion and appetite rhythm?',
    options: [
      {
        text: 'Irregular, experiences bloating, gas, or skips meals without realizing',
        dosha: 'vata',
        label: 'Vata Characteristic'
      },
      {
        text: 'Sharp, strong appetite, cannot skip meals without getting irritable/acidic',
        dosha: 'pitta',
        label: 'Pitta Characteristic'
      },
      {
        text: 'Slow, steady appetite, feels heavy after meals, loves warm comfort food',
        dosha: 'kapha',
        label: 'Kapha Characteristic'
      }
    ]
  },
  {
    id: 5,
    question: 'What is your sleep pattern like?',
    options: [
      {
        text: 'Light, interrupted, takes time to fall asleep with racing mind',
        dosha: 'vata',
        label: 'Vata Characteristic'
      },
      {
        text: 'Moderate (6-7 hrs), wakes up easily if room is warm, vivid dreams',
        dosha: 'pitta',
        label: 'Pitta Characteristic'
      },
      {
        text: 'Deep, heavy, hard to wake up early in the morning, loves 8+ hours',
        dosha: 'kapha',
        label: 'Kapha Characteristic'
      }
    ]
  },
  {
    id: 6,
    question: 'How do you react to changing weather and stress?',
    options: [
      {
        text: 'Dislikes cold and dry winds; stress manifests as worry and mental anxiety',
        dosha: 'vata',
        label: 'Vata Characteristic'
      },
      {
        text: 'Dislikes high heat and direct sun; stress manifests as irritation or frustration',
        dosha: 'pitta',
        label: 'Pitta Characteristic'
      },
      {
        text: 'Dislikes damp and chilly weather; stress manifests as lethargy or emotional eating',
        dosha: 'kapha',
        label: 'Kapha Characteristic'
      }
    ]
  }
];

export const DOSHA_RESULTS = {
  vata: {
    name: 'Vata Dominant (Air & Space)',
    tagline: 'The Creative & Dynamic Constitution',
    description: 'Vata governs all movement, cellular communication, and the nervous system. When balanced, you are energetic, creative, and enthusiastic. When elevated by stress or cold winds, it leads to dry skin, hair thinning, restless sleep, and digestive gas.',
    recommendations: {
      diet: 'Warm, grounding, well-spiced cooked meals with healthy fats (ghee, sesame oil). Favor sweet, sour, and salty tastes. Avoid cold drinks and raw salads.',
      lifestyle: 'Maintain a consistent daily schedule (Dinacharya), practice gentle yoga, warm oil self-massage (Abhyanga), and aim for early bedtime by 10 PM.',
      herbs: 'Ashwagandha, Dashamoola, Shatavari, Licorice, and Pure Black Sesame oil.'
    },
    recommendedProductIds: ['prod-01', 'prod-03', 'prod-11']
  },
  pitta: {
    name: 'Pitta Dominant (Fire & Water)',
    tagline: 'The Transformative & Brilliant Constitution',
    description: 'Pitta controls metabolism, digestion, body temperature, and cellular transformation. When in harmony, you possess sharp intellect, warm charisma, and radiant skin. When overheated, it triggers skin redness, acne, hair fall, and irritability.',
    recommendations: {
      diet: 'Cooling, hydrating, fresh foods. Favor sweet, bitter, and astringent tastes. Avoid excessively spicy, fermented, or deep-fried foods.',
      lifestyle: 'Exercise during the cooler hours of morning, spend time near water and nature, practice Sheetali cooling pranayama, and avoid mid-day sun.',
      herbs: 'Kashmiri Saffron, Bhringraj, Indian Sandalwood, Pure Rose Water, and Amalaki.'
    },
    recommendedProductIds: ['prod-01', 'prod-02', 'prod-06']
  },
  kapha: {
    name: 'Kapha Dominant (Earth & Water)',
    tagline: 'The Grounded & Nourishing Constitution',
    description: 'Kapha provides structural stability, lubrication, immunity, and emotional loyalty. When balanced, you have strong physical stamina, lustrous hair, and a grounded demeanor. When stagnant, it manifests as heavy sluggishness, oily skin, and water retention.',
    recommendations: {
      diet: 'Light, warm, dry, and stimulating foods with abundant ginger, black pepper, and turmeric. Favor pungent, bitter, and astringent tastes. Minimize dairy and sugar.',
      lifestyle: 'Vigorous morning cardiovascular exercise, dry body brushing (Udvartana), early morning wake-up before sunrise (Brahma Muhurta).',
      herbs: 'Triphala, Wild Turmeric, Organic Neem, Tulsi, and Ginger.'
    },
    recommendedProductIds: ['prod-08', 'prod-05', 'prod-09']
  }
};
