Add-Type -AssemblyName System.Drawing
$canvas = [System.Drawing.Bitmap]::new(1200, 630)
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.SmoothingMode = 'AntiAlias'
$graphics.TextRenderingHint = 'AntiAliasGridFit'
$navy = [System.Drawing.ColorTranslator]::FromHtml('#0c172a')
$blue = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#83aaff'))
$white = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
$muted = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#bfcee3'))
$graphics.Clear($navy)
$grid = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml('#1a2b45'), 1)
for ($position = 0; $position -lt 1200; $position += 60) { $graphics.DrawLine($grid,$position,0,$position,630) }
for ($position = 0; $position -lt 630; $position += 60) { $graphics.DrawLine($grid,0,$position,1200,$position) }
$brandFont = [System.Drawing.Font]::new('Arial',42,[System.Drawing.FontStyle]::Bold -bor [System.Drawing.FontStyle]::Italic)
$titleFont = [System.Drawing.Font]::new('Arial',47,[System.Drawing.FontStyle]::Bold)
$smallFont = [System.Drawing.Font]::new('Arial',19)
$graphics.FillRectangle($blue,60,58,6,67)
$graphics.DrawString('FlyRite',$brandFont,$white,85,54)
$graphics.DrawString('PRECISION IN EVERY PART.',$titleFont,$white,56,225)
$graphics.DrawString('CONFIDENCE IN EVERY FLIGHT.',$titleFont,$blue,56,304)
$graphics.DrawString('STARTER-GENERATOR SPECIALISTS',$smallFont,$muted,62,426)
$graphics.DrawString('VERNON, BC    /    TRANSPORT CANADA AMO 90-97',$smallFont,$muted,62,541)
$canvas.Save((Join-Path $PSScriptRoot 'assets/social-card.jpg'),[System.Drawing.Imaging.ImageFormat]::Jpeg)
$graphics.Dispose(); $canvas.Dispose(); $grid.Dispose(); $brandFont.Dispose(); $titleFont.Dispose(); $smallFont.Dispose(); $blue.Dispose(); $white.Dispose(); $muted.Dispose()
