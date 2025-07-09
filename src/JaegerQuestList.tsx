import React from "react";
import {
  Box,
  Checkbox,
  Typography,
  FormControlLabel,
  TextField,
  MenuItem,
  IconButton,
  Dialog,
  Button
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import type { Quest } from "./types"; // Adjust the import path as needed

// Jaeger's quest list with objectives
const jaegerQuests: Quest[] = [
    
  {
    id:'acquaintance',
    name: 'Acquaintance',
    description:'Find specified food for Jaeger',
    leadsTo: [''],
    objectives: [
      {id: 'acq_iskra', description:'Find and hand over 3 iskra ration packs to Jaeger', type:'counter', required: 3, foundInRaid: true},
      {id: 'acg_noods', description:'Find and hand over 2 packs of instant noodles to Jaeger', type: 'counter', required: 2, foundInRaid: true},
      {id: 'acq_beef', description:'Find and hand over 2 cans of beef stew(large) to Jaeger', type: 'counter', required: 2, foundInRaid: true}
    ],
  },
  // Add more quests as needed...
];
// ===== JaegerQuestList Component =====
// Displays Jaeger's quests with objectives, checkboxes, counters, FIR tags, required items, optional items (with checkboxes), and visual completion cues
// ===== JaegerQuestList Component =====
function JaegerQuestList() {
  // ===== State: Quest Completion =====
  const [completed, setCompleted] = React.useState<{ [id: string]: boolean }>(() => {
    const saved = localStorage.getItem('jaegerQuestProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // ===== State: Objective Progress =====
  const [objectiveProgress, setObjectiveProgress] = React.useState<{ [questId: string]: { [objId: string]: number | boolean } }>(() => {
    const saved = localStorage.getItem('jaegerObjectiveProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // ===== State: Optional Item Progress =====
  const [optionalItemProgress, setOptionalItemProgress] = React.useState<{ [questId: string]: { [itemId: string]: boolean } }>(() => {
    const saved = localStorage.getItem('jaegerOptionalItemProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // ===== State: Required Item Checkbox Progress =====
  const [requiredItemProgress, setRequiredItemProgress] = React.useState<{ [questId: string]: { [itemId: string]: boolean } }>(() => {
    const saved = localStorage.getItem('jaegerRequiredItemProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // ===== State: Selected Map =====
  const [selectedMap, setSelectedMap] = React.useState<string>('');

  // ===== State: Image Lightbox =====
  const [openImage, setOpenImage] = React.useState<{ image: string; description: string } | null>(null);

  // ===== Handlers: Required Item Checkbox =====
  const handleRequiredItemCheck = (questId: string, itemId: string) => {
    setRequiredItemProgress(prev => {
      const questObj = prev[questId] || {};
      const updated = {
        ...prev,
        [questId]: { ...questObj, [itemId]: !questObj[itemId] }
      };
      localStorage.setItem('jaegerRequiredItemProgress', JSON.stringify(updated));
      return updated;
    });
  };

  // ===== Handlers: Objective Checkbox =====
  const handleObjectiveCheck = (questId: string, objId: string) => {
    setObjectiveProgress(prev => {
      const questObj = prev[questId] || {};
      const updated = {
        ...prev,
        [questId]: { ...questObj, [objId]: !questObj[objId] }
      };
      localStorage.setItem('jaegerObjectiveProgress', JSON.stringify(updated));
      return updated;
    });
  };

  // ===== Handlers: Objective Counter =====
  const handleCounterObjective = (questId: string, objId: string, value: number) => {
    setObjectiveProgress(prev => {
      const questObj = prev[questId] || {};
      const updated = {
        ...prev,
        [questId]: { ...questObj, [objId]: value }
      };
      localStorage.setItem('jaegerObjectiveProgress', JSON.stringify(updated));
      return updated;
    });
  };

  // ===== Handlers: Optional Item Checkbox =====
  const handleOptionalItemCheck = (questId: string, itemId: string) => {
    setOptionalItemProgress(prev => {
      const questObj = prev[questId] || {};
      const updated = {
        ...prev,
        [questId]: { ...questObj, [itemId]: !questObj[itemId] }
      };
      localStorage.setItem('jaegerOptionalItemProgress', JSON.stringify(updated));
      return updated;
    });
  };

  // ===== Effect: Auto-complete Quest if All Objectives Complete =====
  React.useEffect(() => {
    jaegerQuests.forEach(quest => {
      if (!quest.objectives || quest.objectives.length === 0) return;
      const questObj = objectiveProgress[quest.id] || {};
      const allComplete = quest.objectives.every(obj => {
        if (obj.type === 'checkbox') {
          return !!questObj[obj.id];
        } else if (obj.type === 'counter') {
          return Number(questObj[obj.id]) >= (obj.required || 1);
        }
        return false;
      });
      if (allComplete && !completed[quest.id]) {
        setCompleted(prev => {
          const updated = { ...prev, [quest.id]: true };
          localStorage.setItem('jaegerQuestProgress', JSON.stringify(updated));
          return updated;
        });
      } else if (!allComplete && completed[quest.id]) {
        setCompleted(prev => {
          const updated = { ...prev, [quest.id]: false };
          localStorage.setItem('jaegerQuestProgress', JSON.stringify(updated));
          return updated;
        });
      }
    });
    // eslint-disable-next-line
  }, [objectiveProgress]);

  // ===== RENDER: Quest List =====
  const uniqueMaps = [...new Set(jaegerQuests.map(q => q.map).filter(Boolean))];
  const filteredQuests = selectedMap
    ? jaegerQuests.filter(q => q.map === selectedMap)
    : jaegerQuests;

  return (
    <>
      <Box>
        {/* Map filter dropdown */}
        <Box sx={{ mb: 2 }}>
          <TextField
            select
            label="Filter by Map"
            value={selectedMap}
            onChange={e => setSelectedMap(e.target.value)}
            sx={{ minWidth: 200 }}
            InputLabelProps={{ shrink: true }}
            SelectProps={{
              displayEmpty: true,
              renderValue: (selected) =>
                typeof selected === "string" && selected !== "" ? selected : "All Maps"
            }}
          >
            <MenuItem value="">All Maps</MenuItem>
            {uniqueMaps.map(map => (
              <MenuItem key={map} value={map}>{map}</MenuItem>
            ))}
          </TextField>
        </Box>
        {filteredQuests.map((quest: Quest) => {
          const isCompleted = !!completed[quest.id];
          const questObj = objectiveProgress[quest.id] || {};
          return (
            <Box
              key={quest.id}
              sx={{
                mb: 2,
                p: 2,
                border: '1px solid #ccc',
                borderRadius: 2,
                backgroundColor: isCompleted ? '#e0e0e0' : 'inherit',
                opacity: isCompleted ? 0.6 : 1,
                transition: 'background 0.2s, opacity 0.2s',
              }}
            >
              {/* ===== Quest Name & Completion Checkbox ===== */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCompleted}
                    onChange={() => {
                      setCompleted(prev => {
                        const updated = { ...prev, [quest.id]: !prev[quest.id] };
                        localStorage.setItem('jaegerQuestProgress', JSON.stringify(updated));
                        return updated;
                      });
                    }}
                  />
                }
                label={
                  <Typography
                    variant="h6"
                    sx={{
                      textDecoration: isCompleted ? 'line-through' : 'none',
                      color: isCompleted ? 'text.disabled' : 'text.primary',
                    }}
                  >
                    {quest.name}
                  </Typography>
                }
              />
              {/* ===== Level Requirement ===== */}
              {quest.levelRequired && (
                <Typography
                  variant="subtitle2"
                  sx={{
                    ml: 4,
                    color: isCompleted ? 'text.disabled' : 'text.secondary',
                    fontWeight: 'bold'
                  }}
                >
                  Level Required: {quest.levelRequired}
                </Typography>
              )}
              {/* ===== Quest Description ===== */}
              <Typography
                variant="body2"
                sx={{
                  ml: 4,
                  textDecoration: isCompleted ? 'line-through' : 'none',
                  color: isCompleted ? 'text.disabled' : 'text.primary',
                }}
              >
                {quest.description}
              </Typography>

              {/* ===== Requirements Section (add this!) ===== */}
{quest.requirements && quest.requirements.length > 0 && (
  <Typography
    variant="subtitle2"
    sx={{ ml: 4, color: 'warning.main', fontWeight: 'bold', mb: 1 }}
  >
    Requirements: {quest.requirements.join(", ")}
  </Typography>
)}
              {/* ===== Objectives Section ===== */}
              {quest.objectives && (
                <Box sx={{ ml: 6, mt: 1 }}>
                  {quest.objectives.map(obj => (
                    <Box key={obj.id} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      {obj.type === 'checkbox' ? (
                        <Checkbox
                          checked={!!questObj[obj.id]}
                          onChange={() => handleObjectiveCheck(quest.id, obj.id)}
                          disabled={isCompleted}
                        />
                      ) : (
                        <>
                          <IconButton
                            size="small"
                            onClick={() => handleCounterObjective(quest.id, obj.id, Math.max(0, Number(questObj[obj.id] || 0) - 1))}
                            disabled={isCompleted || Number(questObj[obj.id] || 0) <= 0}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <TextField
                            type="number"
                            size="small"
                            value={questObj[obj.id] || 0}
                            onChange={e => handleCounterObjective(quest.id, obj.id, Math.max(0, Number(e.target.value)))}
                            inputProps={{ min: 0, max: obj.required || 99, style: { width: 40, textAlign: 'center' } }}
                            disabled={isCompleted}
                            sx={{ mx: 1, width: 60 }}
                          />
                          <IconButton
                            size="small"
                            onClick={() => handleCounterObjective(quest.id, obj.id, Math.min((obj.required || 99), Number(questObj[obj.id] || 0) + 1))}
                            disabled={isCompleted || Number(questObj[obj.id] || 0) >= (obj.required || 99)}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </>
                      )}
                      <Typography
                        variant="body2"
                        sx={{
                          textDecoration: !!questObj[obj.id] && ((obj.type === 'checkbox' && questObj[obj.id]) || (obj.type === 'counter' && Number(questObj[obj.id]) >= (obj.required || 1))) ? 'line-through' : 'none',
                          color: !!questObj[obj.id] && ((obj.type === 'checkbox' && questObj[obj.id]) || (obj.type === 'counter' && Number(questObj[obj.id]) >= (obj.required || 1))) ? 'text.disabled' : 'text.primary',
                          ml: 1,
                          display: 'inline',
                        }}
                      >
                        {obj.description}
                        {obj.type === 'counter' && ` (${questObj[obj.id] || 0}/${obj.required})`}
                        {obj.foundInRaid && (
                          <Box component="span" sx={{ color: 'orange', fontWeight: 'bold', ml: 1 }}>
                            [FIR]
                          </Box>
                        )}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
              {/* ===== Required Items Section ===== */}
              {quest.requiredItems && (
                <Box sx={{ ml: 6, mt: 1 }}>
                  <Typography variant="subtitle2">Required Items:</Typography>
                  {quest.requiredItems.map(item =>
                    item.showCheckbox ? (
                      <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Checkbox
                          checked={!!(requiredItemProgress[quest.id]?.[item.id])}
                          onChange={() => handleRequiredItemCheck(quest.id, item.id)}
                        />
                        <Typography variant="body2" sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                          {item.name}
                          {item.quantity && ` x${item.quantity}`}
                          {item.foundInRaid && (
                            <Box component="span" sx={{ color: 'orange', fontWeight: 'bold', ml: 1 }}>
                              [FIR]
                            </Box>
                          )}
                        </Typography>
                      </Box>
                    ) : (
                      <Typography key={item.id} variant="body2" sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
                        {item.name}
                        {item.quantity && ` x${item.quantity}`}
                        {item.foundInRaid && (
                          <Box component="span" sx={{ color: 'orange', fontWeight: 'bold', ml: 1 }}>
                            [FIR]
                          </Box>
                        )}
                      </Typography>
                    )
                  )}
                </Box>
              )}
              {/* ===== Optional Items Section ===== */}
              {quest.optionalItems && (
                <Box sx={{ ml: 6, mt: 1 }}>
                  <Typography variant="subtitle2">Optional Items:</Typography>
                  {quest.optionalItems.map(item => (
                    <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Checkbox
                        checked={!!(optionalItemProgress[quest.id]?.[item.id])}
                        onChange={() => handleOptionalItemCheck(quest.id, item.id)}
                      />
                      <Typography variant="body2" sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                        {item.name} x{item.quantity}
                        {item.foundInRaid && (
                          <Box component="span" sx={{ color: 'orange', fontWeight: 'bold', ml: 1 }}>
                            [FIR]
                          </Box>
                        )}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
              {/* ===== Leads To Section ===== */}
              <Typography
                variant="caption"
                sx={{
                  ml: 4,
                  textDecoration: isCompleted ? 'line-through' : 'none',
                  color: isCompleted ? 'text.disabled' : 'text.secondary',
                }}
              >
                Leads to: {quest.leadsTo && quest.leadsTo.length > 0 ? quest.leadsTo.join(', ') : '—'}
              </Typography>
              {/* ===== Required for Kappa Tag ===== */}
              <Typography
                variant="caption"
                sx={{
                  ml: 4,
                  color: quest.requiredForKappa ? 'success.main' : 'text.secondary',
                  fontWeight: 'bold',
                  display: 'block'
                }}
              >
                Required for Kappa: {quest.requiredForKappa ? 'Yes' : 'No'}
              </Typography>
              {/* ===== Required for Network Provider Tag (only if required) ===== */}
              {quest.requiredForNetworkProvider && (
                <Typography
                  variant="caption"
                  sx={{
                    ml: 4,
                    color: 'info.main',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  Required for Network Provider
                </Typography>
              )}
              {/* ===== Map Tag (only if present) ===== */}
              {quest.map && (
                <Typography
                  variant="caption"
                  sx={{
                    ml: 4,
                    color: 'primary.main',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  Map: {quest.map}
                </Typography>
              )}
              {/* ===== Transit Tag (only if present) ===== */}
              {quest.transit && (
                <Typography
                  variant="caption"
                  sx={{
                    ml: 4,
                    color: 'warning.main',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  Transit: {quest.transit}
                </Typography>
              )}
              {/* ===== Cooldown Tag (only if present) ===== */}
              {quest.cooldown && (
                <Typography
                  variant="caption"
                  sx={{
                    ml: 4,
                    color: 'error.main',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  Cooldown: {quest.cooldown}
                </Typography>
              )}
              {/* ===== Rewards Section (only if present) ===== */}
              {quest.rewards && quest.rewards.length > 0 && (
                <Box sx={{ ml: 4, mt: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Rewards:</Typography>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    {quest.rewards.map((reward, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" component="span">
                          {reward.amount ? `${reward.amount} ` : ''}
                          {reward.name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              )}
              {/* ===== Note (only if present) ===== */}
              {quest.note && (
                <Typography
                  variant="body2"
                  sx={{
                    ml: 4,
                    color: 'info.main',
                    fontStyle: 'italic',
                    mt: 1,
                  }}
                >
                  {quest.note}
                </Typography>
              )}
              {/* ===== Item Spawn Locations (only if present) ===== */}
              {quest.itemSpawnLocations && quest.itemSpawnLocations.length > 0 && (
                <Box sx={{ mt: 2, ml: 4 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Item Spawn Locations
                  </Typography>
                  {quest.itemSpawnLocations.map((loc, idx) => (
                    <Box key={idx} sx={{ mb: 2, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <img
                        src={loc.image}
                        alt={`Spawn location ${idx + 1}`}
                        style={{ width: 120, height: 'auto', borderRadius: 4, objectFit: 'cover', cursor: 'pointer' }}
                        onClick={() => setOpenImage({ image: loc.image, description: loc.description })}
                      />
                      <Typography variant="body2">{loc.description}</Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
      {/* ===== Image Lightbox Dialog ===== */}
      <Dialog open={!!openImage} onClose={() => setOpenImage(null)} maxWidth="md">
        {openImage && (
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <img
              src={openImage.image}
              alt="Enlarged spawn location"
              style={{ maxWidth: '80vw', maxHeight: '80vh', borderRadius: 8 }}
            />
            <Typography variant="body1" sx={{ mt: 2 }}>
              {openImage.description}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button onClick={() => setOpenImage(null)} variant="contained">Close</Button>
            </Box>
          </Box>
        )}
      </Dialog>
    </>
  );
}
export default JaegerQuestList;