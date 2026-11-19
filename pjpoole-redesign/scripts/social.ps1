Add-Type -AssemblyName System.Drawing
$bitmap = New-Object System.Drawing.Bitmap 1200,630
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$graphics.Clear([System.Drawing.ColorTranslator]::FromHtml('#244735'))
$light = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#f1f5e9'))
$soft = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#c6d6b7'))
$pen = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml('#78937d')),2
$titleFont = New-Object System.Drawing.Font 'Georgia',60
$bodyFont = New-Object System.Drawing.Font 'Arial',19
$labelFont = New-Object System.Drawing.Font 'Arial',14
$graphics.DrawString('DR. PJ POOLE',$labelFont,$soft,75,65)
$graphics.DrawString('Come back',$titleFont,$light,70,170)
$graphics.DrawString('to yourself.',$titleFont,$light,70,265)
$graphics.DrawLine($pen,75,430,1120,430)
$graphics.DrawString('Counselling & personal discovery',$bodyFont,$light,75,468)
$graphics.DrawString('VERNON, BC  |  MIND · BODY · SPIRIT',$labelFont,$soft,75,530)
$graphics.DrawEllipse($pen,870,105,190,245)
$graphics.DrawArc($pen,800,105,190,245,270,180)
$graphics.DrawLine($pen,965,170,965,360)
$bitmap.Save((Join-Path $PSScriptRoot '../assets/social.jpg'),[System.Drawing.Imaging.ImageFormat]::Jpeg)
$titleFont.Dispose(); $bodyFont.Dispose(); $labelFont.Dispose(); $light.Dispose(); $soft.Dispose(); $pen.Dispose(); $graphics.Dispose(); $bitmap.Dispose()
