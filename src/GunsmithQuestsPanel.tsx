import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, Typography } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';

// ===== Types =====
type GunsmithSpec = {
  label: string;
  value: string;
};

type GunsmithQuest = {
  part: number;
  name: string;
  description: string;
  gunsmithSpecs?: GunsmithSpec[];
  requiredParts?: string[];
};

// ===== Gunsmith Quests Data =====
const gunsmithQuests: GunsmithQuest[] = [
  {
    part: 1,
    name: "Gunsmith - Part 1",
    description: "Modify an MP-133 to comply with the required specifications.",
    gunsmithSpecs: [
      { label: "Ergonomics", value: "≥ 47" },
      { label: "Recoil Sum", value: "< 850" },
      { label: "Magazine", value: "≥ 6" },
      { label: "Tactical Device", value: "Required" },
    ],
    requiredParts: ["MP-133", "Any 6-round mag extension", "Any tactical device"],
  },
  {
    part: 2,
    name: "Gunsmith - Part 2",
    description: "Modify an AKS-74U to comply with the required specifications.",
    gunsmithSpecs: [
      { label: "Durability", value: "≥ 60%" },
      { label: "Sight", value: "Any reflex" },
    ],
    requiredParts: ["AKS-74U", "Reflex sight"],
  },
  {
    part: 3,
    name: "Gunsmith - Part 3",
    description: "Modify an MP5 to comply with the required specifications.",
    // No specs/parts for demo
  },
  // Add more parts as needed...
];

// ===== GunsmithQuestsPanel Component =====
// Collapsible panels for each Gunsmith quest
function GunsmithQuestsPanel() {
  const [completed, setCompleted] = React.useState<boolean[]>(Array(gunsmithQuests.length).fill(false));

  const handleCheck = (index: number) => {
    setCompleted(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <Box>
      {gunsmithQuests.map((quest, idx) => (
        <Accordion key={quest.part}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={completed[idx]}
                  onChange={() => handleCheck(idx)}
                  onClick={event => event.stopPropagation()}
                />
              }
              label={quest.name}
              onClick={event => event.stopPropagation()}
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{quest.description}</Typography>

            {/* ===== Gunsmith Specifications (if present) ===== */}
            {quest.gunsmithSpecs && quest.gunsmithSpecs.length > 0 && (
              <Box sx={{ mt: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Required Specifications:</Typography>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {quest.gunsmithSpecs.map((spec, idx) => (
                    <li key={idx}>
                      <Typography variant="body2" component="span">
                        {spec.label}: {spec.value}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            )}

            {/* ===== Required Parts (if present) ===== */}
            {quest.requiredParts && quest.requiredParts.length > 0 && (
              <Box sx={{ mt: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Required Parts:</Typography>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {quest.requiredParts.map((part, idx) => (
                    <li key={idx}>
                      <Typography variant="body2" component="span">
                        {part}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default GunsmithQuestsPanel;