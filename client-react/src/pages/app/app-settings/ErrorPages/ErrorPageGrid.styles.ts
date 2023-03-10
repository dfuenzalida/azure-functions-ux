import { mergeStyleSets, FontWeights, IIconProps } from '@fluentui/react';
import { style } from 'typestyle';
import { ThemeExtended } from '../../../../theme/SemanticColorsExtended';

export const stackTokens = { childrenGap: 5 };

export const stackStyle = style({
  paddingTop: '5px',
});

export const uploadStyle = mergeStyleSets({
  labelHeader: {
    fontWeight: FontWeights.semibold,
  },
});

export const browseButtonStyle = (theme: ThemeExtended) =>
  style({
    backgroundColor: theme.semanticColors.accentButtonBackground,
    color: theme.semanticColors.buttonTextChecked,
    $nest: {
      '&:hover': {
        color: theme.semanticColors.buttonTextChecked,
      },
    },
  });

export const FabricFolder: IIconProps = { iconName: 'FabricFolder' };
